
using System;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;

class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("Kafka Chat App");
        Console.WriteLine("Choose mode: 1 = Sender, 2 = Receiver");
        var choice = Console.ReadLine();

        if (choice == "1")
        {
            await RunProducer();
        }
        else if (choice == "2")
        {
            RunConsumer();
        }
        else
        {
            Console.WriteLine("Invalid choice. Exiting.");
        }
    }

    static async Task RunProducer()
    {
        var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("You are now sending messages. Type and press Enter:");

        while (true)
        {
            Console.Write("You: ");
            var message = Console.ReadLine();
            if (message == "exit") break;
            await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = message });
        }
    }

    static void RunConsumer()
    {
        var config = new ConsumerConfig
        {
            GroupId = "chat-group",
            BootstrapServers = "localhost:9092",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
        consumer.Subscribe("chat-topic");

        Console.WriteLine("Listening for messages (Press Ctrl+C to stop)...");

        var cts = new CancellationTokenSource();
        Console.CancelKeyPress += (_, e) => {
            e.Cancel = true;
            cts.Cancel();
        };

        try
        {
            while (!cts.Token.IsCancellationRequested)
            {
                var msg = consumer.Consume(cts.Token);
                Console.WriteLine($"Friend: {msg.Message.Value}");
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Exiting consumer...");
        }
        finally
        {
            consumer.Close();
        }
    }
}