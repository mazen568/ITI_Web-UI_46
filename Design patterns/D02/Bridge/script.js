class TV {
  increaseVolume() {
    console.log("increasing tv volume");
  }
  decreaseVolume() {
    console.log("decreasing tv volume");
  }

  mute() {
    console.log("tv muted");
  }
}

class Speaker {
  increaseVolume() {
    console.log("increasing speaker volume");
  }

  decreaseVolume() {
    console.log("decreasing speaker volume");
  }
}

class BasicRemote {
  constructor(device) {
    this.device = device;
  }

  increaseVolume() {
    this.device.increaseVolume();
  }

  decreaseVolume() {
    this.device.decreaseVolume();
  }
}

class AdvancedRemote extends BasicRemote {
  mute() {
    if (this.device.mute) {
      this.device.mute();
    } else {
      console.log("this device does not have mute");
    }
  }
}

let tvRemote = new AdvancedRemote(new TV());

tvRemote.increaseVolume();
tvRemote.decreaseVolume();
tvRemote.mute();

let speakerRemote = new BasicRemote(new Speaker());

speakerRemote.increaseVolume();
speakerRemote.decreaseVolume();


let speakerRemote2 = new AdvancedRemote(new Speaker());

speakerRemote2.increaseVolume();
speakerRemote2.decreaseVolume();
speakerRemote2.mute();


