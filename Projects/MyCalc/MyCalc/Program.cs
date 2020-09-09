using System;

namespace MyCalc
{
    class Program
    {
        static void Main(string[] args)
        {
            string strInput1 = "";
            string strInput2 = "";

            // Ask the user to type the first number.
            Console.Write("Type a number, and then press Enter: ");
            strInput1 = Console.ReadLine();
            Console.Write("Type a number, and then press Enter: ");
            strInput2 = Console.ReadLine();

            // Parse the strings to floats
            float floatInput1 = float.Parse(strInput1);
            float floatInput2 = float.Parse(strInput2);

            // Ask the user to choose an operator.
            Console.WriteLine("Choose an operator from the following list:");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.Write("Your option? ");
            string op = Console.ReadLine();

            // Perform the calculations
            if (op == "a")
            {
                Console.WriteLine(Add(floatInput1, floatInput2));
            }
            else if (op == "s")
            {
                Console.WriteLine(Subtract(floatInput1, floatInput2));
            }
            else if (op == "d")
            {
                Console.WriteLine(Divide(floatInput1, floatInput2));
            }
            else if (op == "m")
            {
                Console.WriteLine(Multiply(floatInput1, floatInput2));
            }

            Console.WriteLine("Done calculating");
        }


        static float Add(float num1, float num2)
        {
            return num1 + num2;
        }

        static float Subtract(float num1, float num2)
        {
            return num1 - num2;
        }

        static float Divide(float num1, float num2)
        {
            return num1 / num2;
        }

        static float Multiply(float num1, float num2)
        {
            return num1 * num2;
        }
    }
}
