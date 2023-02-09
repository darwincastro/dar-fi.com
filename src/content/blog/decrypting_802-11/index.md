---
title: 'Decrypt wireless frames with Wireshark'
description: 'Decrypt wireless frames with Wireshark'
pubDate: 'Apr 15 2021'
heroImg: '/decrypting_802-11/image_01.png'
---

---

**Disclaimer**:

This is not a hacking post about sniffing wireless networks or cracking passwords, the intention is to show how to decrypt 802.11 frames (knowing the password and the SSID) using the open-source packet analyzer Wireshark.

---

## Components Used

- A computer running any OS like; Linux, MacOS, or Windows.
- Packet analyzer [Wireshark](https://www.wireshark.org/download.html).
- Previous packets capture collected in [monitor mode](https://documentation.meraki.com/MR/Monitoring_and_Reporting/Capturing_Wireless_Traffic_from_a_Client_Machine).
- Know the password of the target [SSID](<https://en.wikipedia.org/wiki/Service_set_(802.11_network)>).

## Considerations

- Up to 64 keys are supported.
- The packets capture collected must contain the 4-way handshake (EAPOL-Messages 1 to 4), the Wireshark decrypt tool uses WPA/WPA2 keys derived from an EAPOL handshake.

In other words, if your capture doesn’t contain the complete handshake, Wireshark won’t be able to decrypt the frames, it won’t work using control frames, management frames, and data frames only.

## How to

Wireshark is a powerful tool that can decrypt 802.11 frames using the corresponding password from a specific SSID. It can decrypt WEP, WPA/WPA2, and TKIP.

In this post, we are going to focus only on WPA2-PWD & WPA2-PSK.

1.  Open your .pcap file collected with Wireshark. (I filtered only interesting traffic for this post)

![](/decrypting_802-11/image_01.png)

From packets 9 – 12 we can see the 4-way handshake required, packets 18, 20, 22, and so on shows encrypted Data.

Let’s take a look at frame 28, see the payload is encrypted.

![](/decrypting_802-11/image_02.png)

2. Go to the Wireshark tab > Preferences > Protocols > IEEE 802.11, as shown in the image:

![](/decrypting_802-11/image_03.png)

3. Enable decryption and click on Edit, as shown in the image:

![](/decrypting_802-11/image_04.png)

4. Let’s start with wpa-psw, the key is in plaintext, the password goes first followed by `:` and the name of the SSID, as shown in the image.

![](/decrypting_802-11/image_05.png)

5. To use wpa-psk you will need to derive your PSK combining your passphrase and your SSID name, you can use this [link](https://www.wireshark.org/tools/wpa-psk.html) for simplicity, copy and paste the result in Wireshark, as shown in the images.

![](/decrypting_802-11/image_06.png)

![](/decrypting_802-11/image_07.png)

In my case, the name of the SSID is “Meraki”

6. Click OK.

Let’s see packets 18, 20, and 22 again! Now,  we can see L3 information followed by the protocol of the data which is DHCP (before we had 802.11 and L2 information only)

![](/decrypting_802-11/image_08.png)

Let’s take a look at frame 28 one more time!

![](/decrypting_802-11/image_09.png)

You can see the entire payload which includes a DHCP offer.

---

**Important**:
Above all, if for some reason the steps don’t work for you, please try enabling “Validate the FCS checksum if possible” and play around with the “Ignore the protection bit” options, as shown in the image.

---

![](/decrypting_802-11/image_10.png)

In conclusion, decrypting 802.11 frames could be very helpful in a troubleshooting session, instead of seeing only the 802.11 protocols, you can see another picture with L3 information on there. For instance; if your supplicant is sending a Discover, and receiving an offer needed.

**I hope you find this post useful! Please be safe and take care of yourself!**
