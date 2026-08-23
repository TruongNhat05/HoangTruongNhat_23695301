abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Quạt bắt đầu quay mát.");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Máy lạnh bắt đầu làm mát không khí.");
  }
}

const fan = new Fan();
const ac = new AirConditioner();

fan.turnOn();
ac.turnOn();