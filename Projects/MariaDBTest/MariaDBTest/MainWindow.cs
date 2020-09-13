using MySql.Data.MySqlClient;
using CData;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using Gtk;

public partial class MainWindow : Gtk.Window
{
    public MainWindow() : base(Gtk.WindowType.Toplevel)
    {
        Build();
    }

    protected void OnDeleteEvent(object sender, DeleteEventArgs a)
    {
        Application.Quit();
        a.RetVal = true;
    }

    private void button1_Click(object sender, EventArgs e)
    {
        Console.WriteLine("Connect Clicked");
        string connetionString = null;
        MySqlConnection cnn;
        
        connetionString = "server=localhost;port=3306;uid=tcowern;pwd=honda750;";
        cnn = new MySqlConnection(connetionString);
        try
        {
            cnn.Open();
            Console.WriteLine("Connection Open ! ");
            cnn.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine("Can not open connection ! ");
            Console.WriteLine(ex);
        }

    }
}
