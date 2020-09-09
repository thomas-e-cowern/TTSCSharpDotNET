using System;

namespace MyCalc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(Add(2, 3));
            Console.WriteLine(Subtract(2, 3));
            Console.WriteLine(Divide(2, 3));
            Console.WriteLine(Multiply(2, 3));
            Console.WriteLine("Done calculating");
        }

        static int Add(int num1, int num2)
        {
            return num1 + num2;
        }

        static int Subtract(int num1, int num2)
        {
            return num1 - num2;
        }

        static int Divide(int num1, int num2)
        {
            return num1 / num2;
        }

        static int Multiply(int num1, int num2)
        {
            return num1 * num2;
        }
    }
}
