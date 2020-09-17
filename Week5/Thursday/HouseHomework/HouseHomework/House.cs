using System;
namespace HouseHomework
{
    class House
    {
        protected string name;
        protected string color;
        protected int area;
        protected Door door;

        public House(int area, string color)
        {
            this.area = area;
            door = new Door();
            door.Color = color;
        }

        public int Area
        {
            get { return area; }
            set { area = value; }
        }

        public Door Door
        {
            get { return door; }
            set { door = value; }
        }

        public virtual void ShowData()
        {
            Console.WriteLine("I am a house, my area is {0} m2.", area);
        }
    }

    class Door
    {
        protected string color;

        public Door()
        {
            Console.WriteLine("inside house: Color: " + color);
        }

        public string Color
        {
            get { return color; }
            set { color = value; }
        }

        public void ShowData()
        {
            Console.WriteLine("I am a door, my color is {0}.", color);
        }

    }

    class SmallApartment : House
    {
        public SmallApartment() : base(50, "white")
   
        {

        }

        public override void ShowData()
        {
            Console.WriteLine("I am an apartment, my area is " +
                area + " m2");
        }
    }

    class Person
    {
        protected string name;
        protected House house;

        //public Person()
        //{
        //    name = "Juan";
        //    house = new House(150);
        //}

        public Person(string name, House house)
        {
            this.name = name;
            this.house = house;
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public House House
        {
            get { return house; }
            set { house = value; }
        }

        public void ShowData()
        {
            Console.WriteLine("My name is {0}.", name);
            house.ShowData();
            house.Door.ShowData();
        }
    }
}

