let temperaturesWeek1 =[-1,5,1,-10,-11,2,30,-8,-14];
let temperaturesWeek2 = [-1,5,3,-10,-11,2,30,-8,-44];


MittelwertWoche1 = 0;

for (let a = 0; a < temperaturesWeek1.length; a++) {
    MittelwertWoche1 = MittelwertWoche1 + temperaturesWeek1[a]/temperaturesWeek1.length;
  }
  console.log("Der MittelWert von Woche 1 beträgt" + " " +MittelwertWoche1);

  MittelwertWoche2 = 0;

for (let a = 0; a < temperaturesWeek2.length; a++) {
    MittelwertWoche2 = MittelwertWoche2 + temperaturesWeek2[a]/temperaturesWeek2.length;
  }
  console.log("Der MittelWert von Woche 2 beträgt" + " " +MittelwertWoche2);


  if(MittelwertWoche1>MittelwertWoche2){
    console.log("Woche 1 war Wärmer ");
}
else if (MittelwertWoche1<MittelwertWoche2){
    console.log("Woche 2 war Wärmer");
}
else if(MittelwertWoche1==MittelwertWoche2){
    console.log("Beide Wochen war gleich Warm");
}