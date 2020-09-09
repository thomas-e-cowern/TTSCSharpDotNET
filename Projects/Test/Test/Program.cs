using System;
using Gtk;

namespace Test
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World");
            Application.Init();
            Window win = new Window("My first GTK# Application! ");
            win.Resize(200, 200);

            //Create a label and put some text in it.
            Label myLabel = new Label();
            myLabel.Text = "Hello World!!!!";

            //Cretate a button and alter the text.
            Button myButton = new Button();
            myButton.Label = "Me Button";

            //Add the label and button to the form
            //win.Add(myLabel);
            win.Add(myButton);

            //Make it all visible
            win.ShowAll();
            Application.Run();
        }
    }
}
