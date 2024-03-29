const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop for reference 

for(let i = 0; i < companies.length; i++) {

  const displayDiv = document.createElement("div");
  const displayUL = document.createElement("ul");
  const displayLI = document.createElement("li");

  displayDiv.setAttribute("id", "displayDiv");
  displayUL.setAttribute("id", "displayUL");
  displayLI.setAttribute("id", "displayLI");
  displayUL.append(displayLI);
  displayDiv.append(displayUL);
  document.body.append(displayDiv);
  
  let myString = JSON.stringify(companies)
  displayLI.innerHTML = myString

};

 















// FOREACH
// companies.forEach(company => {
//     console.log(company.name)
// });

// FILTER
// filter ages that can drink
// const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         // canDrink.push(age) --- don't need if using FILTER
//         return true;
//     }   
// });
//cleaner version
// const canDrink = ages.filter(age => age >= 21);

// // filter retail companies
// // const isRetail = companies.filter(function(company) {
// // if (company.category === "Retail") {
// //      return true;   
// // }
// // });

// const isRetail = companies.filter(company => company.category === "Retail");

// // console.log(isRetail);

// // started in 80s
// const fromEighties = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// // console.log(fromEighties)

// // companies lasted 10 years
// const decade = companies.filter(company => (company.end - company.start >= 10))

// // console.log(decade)

// // MAP
// const companyNames = companies.map(company => company.name)

// console.log(companyNames)

// SORT 

// REDUCE