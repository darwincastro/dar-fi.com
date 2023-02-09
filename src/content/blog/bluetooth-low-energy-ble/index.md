---
title: 'Bluetooth Low Energy (BLE)'
description: 'Bluetooth Low Energy'
pubDate: 'Sep 24 2020'
heroImg: '/bluetooth-low-energy-ble/image_01.png'
updatedDate: 'Feb 02 2023'
---

## History

Many of us – Well, at least in my case? ever wondered if Bluetooth Technology is part of the Wi-Fi technology, and why its coverage distance is low…

Let’s starts from the Origin of the name, courtesy of [bluetooth.com](https://www.bluetooth.com/about-us/bluetooth-origin/)

For how innovative the technology, the name doesn’t sound techie. It’s not an acronym and doesn’t stand for anything. So what does it mean?

Surprisingly, the name dates back more than a millennium to King Harald “Bluetooth” Gormsson who was well known for two things:

1. Uniting Denmark and Norway in 958.
2. His dead tooth, which was a dark blue/grey color, and earned him the nickname Bluetooth.

Ok… ok cool, but what has to do with technology?

In 1996, three industry leaders, Intel, Ericsson, and Nokia, met to plan the standardization of this short-range radio technology to support connectivity and collaboration between different products and industries.

During this meeting, Jim Kardach from Intel suggested Bluetooth as a temporary code name. Kardach was later quoted as saying, “King Harald Bluetooth…was famous for uniting Scandinavia just as we intended to unite the PC and cellular industries with a short-range wireless link.”

Bluetooth was only intended as a placeholder until marketing could come up with something really cool.

Later, they tried renaming Bluetooth with RadioWire and PAN, but the people were more comfortable using the first “Temporal Name Bluetooth”

## Concept

Now, let’s talk about the concept of Classic Bluetooth

Bluetooth, it’s a wireless (without wire) industry-standard registered in the Institute of Electrical and Electronics Engineers under IEEE 802.15.1 It’s a short distance energy transmitted by low powered radios, it’s used to exchange data and handle communication between Bluetooth devices. The Bluetooth concept was developed initially to portable devices like; cellphones, headsets, wireless speakers, headphones, but nowadays is almost everywhere.

It’s a short-range because it covers 30 feet or 10 meters, nothing if we compare to Wi-Fi, today, Bluetooth is managed by the [Special Interest Group](https://en.wikipedia.org/wiki/Bluetooth_Special_Interest_Group) "SIG"

Bluetooth belongs to the 2.4 GHz frequency group, and it operates especially on 2.45 GHz frequency, right between channels 8 and 9.

![BLE Transmit Spectrum Mask](/bluetooth-low-energy-ble/image_01.png)

<figcaption>Image courtesy of ResearchGate</figcaption>

### Bluetooth and Wi-Fi

So, Bluetooth and Wi-Fi are alike technologies used to communicate devices wirelessly through radio signals, they share the same ISM (Industrial Scientific and Medical) band, and one key differentiator is that Bluetooth consumes low power due to device portability, and that’s the reason why it travels in a limited range of 10 meters.

In order to establish a communication is required that 2 or more devices possess a special radio designed for Bluetooth technology, which means the same radio used for Wi-Fi won’t work for Bluetooth and vice versa.

Both Bluetooth and Wi-FI are industry standards, and we already know that Wi-Fi belongs to the recognized scheme IEEE 802.11 (which is different compared to the Bluetooth scheme IEEE 802.15.1) In the wireless world, Bluetooth is classified as a Non-802.11 source of interference, as I said before 2.4 GHz is a free-shared, and unlicensed medium, so any neighboring appliance transmitting/receiving in 2.4 GHz could impact a WLAN, folks, that’s the reason why a Pre/Post Deployment

[Site Survey](https://www.cisco.com/c/en/us/support/docs/wireless/5500-series-wireless-controllers/116057-site-survey-guidelines-wlan-00.html) is always required, even if the WLAN has been up and running for a while, the Site Survey could be handy to optimize existing wireless infrastructures.

Let’s think about it, one Bluetooth device.- let’s say a hand-free headset couldn’t affect a WLAN., is it?  it is right, a single 802.15.1 couldn’t hurt a well-designed WLAN, but what about a call center? imagine dozens or hundreds of headset per-employee, living in the same spectrum, additionally; policies like [BYOD](https://www.forcepoint.com/cyber-edu/bring-your-own-device-byod)

where users can connect cellphones, laptops, tablets, smartwatches, and any other electronic component will impact in a negative way a bad designed WLAN, for example, 2.4 GHz in North America has only 3 non-overlapping channels 1, 6, 11 (very very limited nowadays) if 802.15.1 operates in channels 8, 9 they will interference with the non-overlapping channels 6, 11, it will decrease the throughput, and increase Wi-Fi retransmissions, this bad phenomenon is also called Adjacent Channel Interference [(ACI)](https://www.metageek.com/training/resources/adjacent-channel-congestion.html)

## Bluetooth Low Energy

BLE stands for Bluetooth low energy, which is also called “Smart Bluetooth”

Bluetooth Low Energy (BLE) Beacons. As the name implies, BLE beacons use low energy and as such are much more efficient. Essentially BLE sacrifices bandwidth for battery life. It does this by only connecting for very brief periods of around 3ms and only when it needs to. In theory, BLE beacons can send up to 100 meters although in practice it’s usually much less depending on the environment.

Meraki access points with an integrated Bluetooth Low Energy radio have the ability to transmit BLE Beacons, as well as to scan and locate BLE devices. Client devices like smartphones “hear” the BLE Beacon emitted by a Meraki AP, and an app on the smartphone can respond to a recognized Beacon. BLE scanning allows the Meraki AP to listen for and locate all Bluetooth Low Energy devices. The BLE scanner can hear other Beacons, BLE asset tags, and devices like fitness monitors that communicate using BLE data protocols. Refer [here](<https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)>) for more information.

Due to the versatility, and low power usage BLE is specially designed for Smart Homes, Fitness Industry, Health Sector, Smart Cities, and many others. The best example that we can drag here is IoT or (Internet of things) they’re objects embedded with sensors, software, and technologies with the purpose of connecting/exchanging data with other devices and systems over the internet.

BLE uses [FHSS](https://www.freewave.com/technology/frequency-hopping-spread-spectrum-technology/), hence in order to capture all BLE beacons, you may require an industrial 2.4 GHz wideband sniffer tuned for BLE.

Please take a look into this [post](https://www.dar-fi.com/capturing-bluetooth/) to learn how to capture Bluetooth traffic using a Linux machine.

### Tools

#### The following tool helps to capture some BLE beacon frames over the air, it could help if you have an access point or other capable BLE device sending beacons:

- BLE Scanner is used by not only developers but also users who are using it to find their lost Fitness Trackers and other Bluetooth Smart Devices. You can download it in Google Play [here](https://play.google.com/store/apps/details?id=com.macdom.ble.blescanner&hl=en_US).

- BLE Scanner 4.0 designed for Apple devices, you can download it in the Apple Store [here](https://apps.apple.com/us/app/ble-scanner-4-0/id1221763603).

I hope you have enjoyed this quick reference for Bluetooth Low Energy (BLE)

Please take care, keep the social distancing, and don’t go outside without a face mask!
