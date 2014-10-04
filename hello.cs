using System;
using Leap;

class SampleListener : Listener {
    private Object thisLock = new Object ();

    private void SafeWriteLine (String line) {
        lock (thisLock) {
            ConsoleWriteLine(line);
        }
    } 

    public override void OnConnect (Controller controller) {
        SafeWriteLine("connected");
    }

    public override void OnFrame (Controller controller) {
        SafeWriteLine ("Le frame is le here.");
    }
}
 
public class FirstLeapTest {
    static public void Main(String[] args) {
        Controller controller = new Controller ();
        Console.WriteLine("hello.");
        Console.ReadLine();
    }
}