using System;
namespace Homework
{
    public class TriangleHomework
    {
        internal class MakeTriangle : TriangleHomework
        {

            public MakeTriangle(int width, int num)
            {
                Console.WriteLine("Width: " + width);
                Console.WriteLine("Number: " + num);
                int count = width;
                while (count > 0)
                {
                    for (int i = 0; i < width; i++)
                    {
                        Console.Write(num);
                    }
                    count--;
                }
                    
            }
        }
    }
}
