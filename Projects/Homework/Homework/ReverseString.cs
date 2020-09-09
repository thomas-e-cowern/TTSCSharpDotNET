using System;
namespace Homework
{
    public class ReverseString
    {
        internal class ReverseMe : ReverseString
        {
            public ReverseMe(string letters)
            {
                string reversedString = "";
                Console.WriteLine(letters);
                for (int i = letters.Length; i > 0; i--)
                {
                    Console.WriteLine(letters[i - 1]);
                    reversedString = reversedString + letters[i - 1] + " ";
                }

                Console.WriteLine(reversedString);
            }
        }
    }
}
