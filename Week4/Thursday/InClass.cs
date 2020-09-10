class InClass
{

    public static void Main(string[] args) 
    {
        Testing();
    }

    public Testing ()
    {
        Dictionary<String, Integer> person = new Dictionary<String, Integer>();
        person.Add("Joan", 22);
        person.Add("Daniel", 42);
        person.Add("Anna", 34);

        for (int i = 0; i < person.Count; i++) {
            Console.WriteLine( "Key: {0}, Value: {1}", 
            person.Keys.ElementAt(i), 
            person[ person.Keys.ElementAt(i) ] );
        }
    }
}