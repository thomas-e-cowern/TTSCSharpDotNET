using System;

namespace Homework
{
    public class HomeClass
    {
        static void Main(String[] args)
        {
            Console.WriteLine("This is a line");
            ReverseString rString = new ReverseString.ReverseMe("bat");
            TriangleHomework myTriangle = new TriangleHomework.MakeTriangle(6, 6);
        }
    }
}
