using NUnit.Framework;
using System;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        private SimpleCalculator calc;

        [SetUp]
        public void Setup()
        {
            calc = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            calc.AllClear();
        }

        [Test]
        [TestCase(3, 4, 7)]
        [TestCase(-1, -1, -2)]
        [TestCase(5.5, 2.5, 8)]
        public void Addition_ReturnsExpectedResult(double a, double b, double expected)
        {
            double result = calc.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected).Within(0.0001));
        }

        [Test]
        [TestCase(10, 4, 6)]
        [TestCase(-2, -2, 0)]
        [TestCase(5.5, 2.5, 3)]
        public void Subtraction_ReturnsExpectedResult(double a, double b, double expected)
        {
            double result = calc.Subtraction(a, b);
            Assert.That(result, Is.EqualTo(expected).Within(0.0001));
        }

        [Test]
        [TestCase(2, 3, 6)]
        [TestCase(-1, 5, -5)]
        [TestCase(2.5, 2, 5)]
        public void Multiplication_ReturnsExpectedResult(double a, double b, double expected)
        {
            double result = calc.Multiplication(a, b);
            Assert.That(result, Is.EqualTo(expected).Within(0.0001));
        }

        [Test]
        [TestCase(10, 2, 5)]
        [TestCase(9, 3, 3)]
        [TestCase(5.5, 2.2, 2.5)]
        public void Division_ReturnsExpectedResult(double a, double b, double expected)
        {
            double result = calc.Division(a, b);
            Assert.That(result, Is.EqualTo(expected).Within(0.0001));
        }

        [Test]
        public void Division_ByZero_ThrowsArgumentException()
        {
            var ex = Assert.Throws<ArgumentException>(() => calc.Division(5, 0));
            Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));
        }

        [Test]
        public void AllClear_SetsResultToZero()
        {
            calc.Addition(5, 10); 
            calc.AllClear();
            Assert.That(calc.GetResult, Is.EqualTo(0));
        }

        [Test]
        public void GetResult_ReturnsLastComputedValue()
        {
            calc.Subtraction(10, 4);
            Assert.That(calc.GetResult, Is.EqualTo(6));
        }
    }
}
