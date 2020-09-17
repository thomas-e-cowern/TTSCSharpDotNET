using System;

namespace HouseHomework
{
    class Program
    {
        static void Main(string[] args)
        {
            string name;
            int houseArea;
            string doorColor;

        // Get user name
            Console.Write("Please enter your name... ");
            name = Console.ReadLine();    

            // Get house dimensions and door color from user
            Console.Write("What is the area of your house? ");
            houseArea = Int32.Parse(Console.ReadLine());
            Console.Write("What is the color of your door? ");
            doorColor = Console.ReadLine();

            House newHouse = new House(houseArea, doorColor);
            Person newPerson = new Person(name, newHouse);
          

            newPerson.ShowData();

        }
    }
}
