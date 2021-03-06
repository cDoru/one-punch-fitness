[@bs.module "Assets"] external illustrations : Js.t({..}) = "Illustrations";

type info = {
  coverImage: int,
  title: string,
  shortDescription: string,
  content: option(string),
  url: option(string)
};

let cards = [|
  {
    coverImage: illustrations##theSecretSauce,
    title: "What is Saitama's secret?",
    shortDescription: "Learn about this routine from Saitama himself!",
    content:
      Some(
        "First, what's important is to make sure you stick to this intense training regimen."
        ++ " You just have to keep doing it. No matter how hard it gets. "
        ++ "It took me three years to get this strong. "
        ++ "One hundred push-ups! One hundred sit-ups! One hundred squats! "
        ++ "Then a 10 kilometer run! Every single day!"
        ++ " And of course, make sure you eat three meals a day. "
        ++ "Just a banana in the morning is fine. But the most important thing is "
        ++ " to never use the a.c. or heat in the summer or winter "
        ++ "so that you can strenghten the mind. "
        ++ "In the beginning, you'll wish you were dead. "
        ++ "You might start thinking, what's the harm of taking a day off? "
        ++ "But for me, in order to be a strong hero, no matter how tough it was even if I was spitting blood, I never stopped. "
        ++ "I kept doing squats even when my legs were so heavy they refused to move. "
        ++ "Even when my arms started making weird clicking noises, I kept doing push-ups. "
        ++ "A year and a half later, I started to notice a difference. "
        ++ "I was bald ... and I had become stronger. "
        ++ "In other words, you gotta train like hell to the point where your hair falls out."
        ++ " That's the only way to become strong.\n\n- Saitama,\n\t\"Someone who is a hero for fun.\""
      ),
    url: None
  },
  {
    coverImage: illustrations##properPushups,
    title: "Proper Push-Up Technique",
    shortDescription: "Make sure you're training your arms the right way!",
    content: None,
    url: Some("https://www.livestrong.com/article/32382-proper-pushup-technique/")
  },
  {
    coverImage: illustrations##wristsHurtPushup,
    title: "A Wrist Mobility Drill",
    shortDescription: "Don't let your joints tap out before your muscles!",
    url: Some("https://www.instagram.com/p/4Wf-bgMEVm/"),
    content: None
  }
|];