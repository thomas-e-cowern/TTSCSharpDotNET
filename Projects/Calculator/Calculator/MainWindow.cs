using System;
using System.Collections;
using Gtk;
using Object = System.Object;

public partial class MainWindow : Gtk.Window
{

    //Variables
    ArrayList arlist = new ArrayList();

    public MainWindow() : base(Gtk.WindowType.Toplevel)
    {
        Build();
        EventsHand();
    }

    protected void OnDeleteEvent(object sender, DeleteEventArgs a)
    {
        Application.Quit();
        a.RetVal = true;
    }

    public void EventsHand()
    {

    }

    private void NumOne_Click(object sender, EventArgs args)
    {
        
        label.Text = label.Text + 1.ToString();
    }

    private void NumTwo_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 2.ToString();
    }

    private void NumThree_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 3.ToString();
    }

    private void NumFour_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 4.ToString();
    }

    private void NumFive_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 5.ToString();
    }

    private void NumSix_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 6.ToString();
    }

    private void NumSeven_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 7.ToString();
    }

    private void NumEight_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 8.ToString();
    }

    private void NumNine_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 9.ToString();
    }

    private void NumZero_Click(object sender, EventArgs args)
    {
        label.Text = label.Text + 0.ToString();
    }

    private void FuncAdd_Click(object sender, EventArgs args)
    {
        arlist.Add(Int32.Parse(label.Text));
        label.Text = "";
        arlist.Add("Add");
    }

    private void FuncSub_Click(object sender, EventArgs args)
    {
        arlist.Add(Int32.Parse(label.Text));
        label.Text = "";
        arlist.Add("Subtract");
    }

    private void FuncDiv_Click(object sender, EventArgs args)
    {
        arlist.Add(Int32.Parse(label.Text));
        label.Text = "";
        arlist.Add("Divide");
    }

    private void FuncMul_Click(object sender, EventArgs args)
    {
        arlist.Add(Int32.Parse(label.Text));
        label.Text = "";
        arlist.Add("Multiply");
    }

    private void Clear_Click(object sender, EventArgs args)
    {
        label.Text = "";
    }

    private void Equals_Click(object sender, EventArgs args)
    {
        arlist.Add(Int32.Parse(label.Text));
        int num1 = (int)arlist[0];
        Console.WriteLine(num1);
        string func = (string)arlist[1];
        Console.WriteLine(func);
        int num2 = (int)arlist[2];
        Console.WriteLine(num2);
        int result = DoTheMath(num1, num2, func);
        label.Text = result.ToString();
        arlist.RemoveRange(0, 3);
    }

    public int DoTheMath(int num1, int num2, string mathFunc)
    {
        if (mathFunc == "Add")
        {
            return num1 + num2;
        }
        else if (mathFunc == "Subtract")
        {
            return num1 - num2;
        }
        else if (mathFunc == "Divide")
        {
            return num1 / num2;
        }
        else
        {
            return num1 * num2;
        }
    }
}
