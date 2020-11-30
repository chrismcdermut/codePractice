findDomainClickTotal Notes go here!

// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

// counts = [ "900,google.com",
//      "60,mail.yahoo.com",
//      "10,mobile.sports.yahoo.com",
//      "40,sports.yahoo.com",
//      "300,yahoo.com",
//      "10,stackoverflow.com",
//      "20,overflow.com",
//      "5,com.com",
//      "2,en.wikipedia.org",
//      "1,m.wikipedia.org",
//      "1,mobile.sports",
//      "1,google.co.uk"]

// Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

// Sample output (in any order/format):

// calculateClicksByDomain(counts) =>
// com:                     1345
// google.com:              900
// stackoverflow.com:       10
// overflow.com:            20
// yahoo.com:               410
// mail.yahoo.com:          60
// mobile.sports.yahoo.com: 10
// sports.yahoo.com:        50
// com.com:                 5
// org:                     3
// wikipedia.org:           3
// en.wikipedia.org:        2
// m.wikipedia.org:         1
// mobile.sports:           1
// sports:                  1
// uk:                      1
// co.uk:                   1
// google.co.uk:            1


const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

function findTotalCounts(countsInput){
  let finalCountTally = {

  }

  countsInput.forEach((countInfo)=>{
    //first split the number
    //then split the string
    const splitInfo = countInfo.split(',')
    const clickCount = splitInfo[0]
    const clickedDomain = splitInfo[1]
    const splitClickedDomain = clickedDomain.split('.')

    //THIS IS LESS BEAUTIFUL RIGHT HERE - PULL THIS OUT INTO COMPONENT FUNCTION
    for(let i=splitClickedDomain.length-1;i>0;i--){

        //construct current domain
//      let currentDomain = splitClickedDomain[i]
        let currentDomain = ''

        //the problem is here
      for(let j=i;j<splitClickedDomain.length;j++){
        const delimeter = j>=splitClickedDomain.length-1 ? '.' : ''
        currentDomain += delimeter + splitClickedDomain[j]
      }

        if(!finalCountTally[currentDomain]){
          console.log('currentDomain')
          console.log(currentDomain)
          console.log('clickCount')
          console.log(clickCount)
        finalCountTally[currentDomain] = clickCount
          console.log('current finalCountTally')
          console.log(finalCountTally)
      } else {
        finalCountTally[currentDomain] += clickCount
        console.log('currentDomain')
          console.log(currentDomain)
          console.log('clickCount')
          console.log(clickCount)
        finalCountTally[currentDomain] = clickCount
          console.log('current finalCountTally')
          console.log(finalCountTally)
      }



    }
  })




  console.log('finalCountTally')
  console.log(finalCountTally)
  return finalCountTally
}

function countsAreCorrect() {
  const input = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
]
  const answer = {
      "com":                     1345,
    "google.com":              900,
    "stackoverflow.com":       10,
    "overflow.com":            20,
    "yahoo.com":               410,
    "mail.yahoo.com":          60,
    "mobile.sports.yahoo.com": 10,
    "sports.yahoo.com":        50,
    "com.com":                 5,
    "org":                     3,
    "wikipedia.org":           3,
    "en.wikipedia.org":        2,
    "m.wikipedia.org":         1,
    "mobile.sports":           1,
    "sports":                  1,
    "uk":                      1,
    "co.uk":                   1,
    "google.co.uk":            1,
  }

  const result = findTotalCounts(input)

  if(result === answer){
    console.log('RESULT IS CORRECT')
    console.log(result)
  } else {
    console.log('RESULT IS WRONG')
  }
}

countsAreCorrect()
