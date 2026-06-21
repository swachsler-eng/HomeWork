using System.Drawing;

namespace Shirt
{
    internal class Shirt
    {
        public string Color { get; set; }
        public string Pattern { get; set; }
        public string[] Colors =
        {
            "red",
            "green",
            "blue"
        };
        public string[] Patterns =
        {
            "striped",
            "checked",
            "plain"
        };
        public Shirt(int colNum=0,int pattNum=0)
        {
            Color = Colors[colNum];
            Pattern = Patterns[pattNum];
        }

        public override string? ToString()
        {
            return $"Color: {Color}  Pattern: {Pattern}";
        }

        static void Main(string[] args)
        {
            Shirt s1 = new Shirt();
            for(int col =0; col<s1.Colors.Length; col++)
            {
                for(int pat = 0; pat < s1.Patterns.Length; pat++)
                {
                    Console.WriteLine(new Shirt(col,pat));
                }
            }
            
        }
    }
}
