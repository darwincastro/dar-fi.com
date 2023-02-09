---
title: 'ENWLSD 300-425 Cisco Exam Experience'
description: 'My ENWLSD 300-425 Cisco Exam Experience'
pubDate: 'Sep 15 2020'
heroImg: '/enwlsd-experience/image_01.jpg'
---

Right after I passed my CWNA exam, on July 06 I started studying for my 300-425 ENWLSD Cisco exam to continue with my wireless journey, and develop new skills. Thanks to my previous experience in the [CWNA](https://www.dar-fi.com/blog-i-passed-my-cwna-test/) exam preparation, I built a good foundation about the dos and don’ts in the Wi-Fi world.

The ENWLSD 300-425 gives you the knowledge that you need to design Cisco wireless networks.

**This exam tests your knowledge of wireless network design, including:**

- Site surveys
- Wired and wireless infrastructure
- Mobility
- WLAN high availability

## Warm up

Let’s talk about the preparation materials that I used:

It’s important to mention that the 300-425 exam was released on February 24, 2020, in the early of July, the guide materials were very limited, I started taking the (ENWLSD) v1.0 [official course](https://www.cisco.com/c/en/us/training-events/training-certifications/training/training-services/courses/designing-cisco-enterprise-wireless-networks-enwlsd.html) They deliver good resources/materials, the labs provided in the course are fundamentals for the exam, the video training is dynamic and intuitive, the instructor [Phil Morgan](https://www.linkedin.com/in/morganphil/es-es?trk=people-guest_people_search-card) has a vast experience on WLANs.

In Udemy, I took the Designing Wireless Enterprise Networks Training ENWLSD course of [Veyhurdam Dikmen](https://www.udemy.com/share/102ceOBksddVpXRnw=/) there are 5.5 hours of video training, it will give you more insight and another point of view about Designing Wireless Enterprise. Cons; the pauses are too long, it needs more graphical examples (sometimes we only read a slide that the instructor is writing during the explanation).

The [Cisco Comunity](https://community.cisco.com/t5/wireless-mobility/ct-p/4931-wireless-mobility) was fundamental to understand many concerns regarding WLCs and Roaming behaviors, the solution authors are well-positioned and accurate wireless folks.

I spent plenty of time reading Rasika’s [blog](https://mrncciew.com/)  The wireless journey and his wireless design explanation using graphical diagrams are a good way to grasp concepts and complex topics.

And last, CCNP Enterprise Wireless Design ENWLSD 300-425 and Implementation ENWLSI 300-430 Official Cert Guide: Designing & Implementing Cisco Enterprise Wireless Networks Electronic resource in [O’Reilly](https://www.oreilly.com/library/view/ccnp-enterprise-wireless/9780136600992/)

They released the book guide after I’ve scheduled my exam ? fortunately, I always schedule with a timeframe of 2 or 3 weeks before taking the exam, so I read and digested the 235 pages less than 10 days.  The certification guide possesses fundamental materials, but it’s not enough to pass the 300-425 exam.

## Plan

I designed a plan to study Mondays through Fridays after work 4 hours per day (sometimes 5 hours) and Saturdays through Sundays 6 hours per day (sometimes 8 hours). My goal was to pass the ENWLSD in 2 months right after that > start preparing for the [CWDP](https://www.cwnp.com/certifications/cwdp) and take/pass the exam before 2020 ends (I hope so… ?)

As many of the well-designed plans in the world, ? I encountered in the process some setbacks, my son is a baby yet, today he has 9 months old, he demands love, care, and a lot of attention, I’m currently working as a Network Support Engineer in Cisco Meraki, in a regular basis, I have to work some weekend shifts.

Hopefully, I always have the support of my wife in any crazy thing that crosses my mind ? and eventually, we found a good balance to continue with the plan.

## Design

After every chapter, I tried to replicate wireless topologies, and I practiced those drawing & predicting what the traffic will do regarding a specific situation or scenario, studying for wireless it’s a bit challenging due to the lack of a virtual lab to practice for the exam.

## Implement

You can create in GNS3 a virtual topology including; WLC / L2 Switches and Routers, in VMware you can recreate; Radius Server, ISE, Prime Infrastructure, and you can interconnect both of them with a couple of steps, but what about the Access Points? there are not virtuals AP to reproduce behaviors of the real world, Why? because AP needs radios transmitters to operate and interconnect to other wireless devices, now if you are able to acquire a physical wireless lab or at least one of each physical component above mentioned, just do it because you will practice at the first hand for the exam, important; having one of each device won’t allow you to practice AP-WLC/HA-Failover-Anchoring.

## Operate

I failed the exam at the first attempt on Sep 03 in 100% of the exam I got 65% Cisco requires that you at least get 825 of scores to pass it, I faced so many tricky questions that I wasn’t well prepared at that time, as I mentioned before for the 300-425 there is not one complete book/guide to follow, you have to create your own study guide using the exam blueprint, and the resources mentioned above, you must re-study all the exam topics a couple of times or until you grasp it.

I failed in operative questions regarding Cisco Prime Infrastructure (PI), my advice is to pay extra attention to the labs under the official course, or if you can download the ova image from Cisco, and run a VM to play with the PI options, just do it, don’t rush.

Investigate and analyze the WLC license types and behaviors, it was another weakness that I had.

## Optimize

I scheduled my second attempt for Sep 15 (only 12 days after my failure) Why? in general I wasn’t scared to retake the exam closely, and I already knew where are my strengths and weaknesses, so I prepared better… sniffing under PI options, looking more information and re-studying about WLC roaming behaviors, don’t underestimate PoP / PoA.

Fortunately, I did pass it the second time?

![](/enwlsd-experience/image_02.jpg)

It’s not the best score ever, but at least I know that hard work worth it, and I’m feeling so proud because now I know-how to Prepare > Plan > Design > Implement > Operate > Optimize an existing or from the scratch wireless network, or as we say in wireless design; greenfield/brownfield?

My last advice; notes, notes, notes, and always take notes about difficult topics, read the notes after complete every chapter, don’t underestimate the power of practice.

I hope you have enjoyed this short story about my ENWLSD experience!

Please take care, keep the social distancing, and don’t go outside without a face mask!
