Dictionary<String, Integer> person = new Dictionary<String, Integer>();
person.Add("Joan", 22);
person.Add("Daniel", 42);
person.Add("Anna", 34);

// person = {Joan=22, Daniel=42, Anna=34}

// loop through the hash map and return each key/value pair
for (int i = 0; i < person.Count; i++) {
    Console.WriteLine( "Key: {0}, Value: {1}", 
    person.Keys.ElementAt(i), 
    person[ person.Keys.ElementAt(i) ] );
}