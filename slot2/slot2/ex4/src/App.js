import React, { useState } from "react";
import './App.css';

const App = () => {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };
/*1. */
  console.log("Company Names:");
  companies.forEach((company) => console.log(company.name));

/*2. */
  const companiesAfter1987 = companies.filter((company) => company.start > 1987);
  console.log("Companies started after 1987:", companiesAfter1987.map((c) => c.name));

/*3. */
  const retailCompanies = companies.filter((company) => company.category === "Retail").map((company) => ({
      ...company,
      start: company.start + 1,
    }));

/*4. */
  const sortedCompaniesByEnd = [...companies].sort((a, b) => a.end - b.end);

/*5. */
  const sortedAgesDesc = [...ages].sort((a, b) => b - a);

/*6. */
  const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
  console.log("Sum of ages:", sumOfAges);

  return (

    <div>
      <h1> Danh sách Công ty</h1>
      <ul>
        {companies.map ((p,index)=>(
          <li key={index}>{p.name}, {p.start}, {p.end}</li>
        ))}
      </ul>

      <h1> Danh sách Công ty sau 1987</h1>
      {companiesAfter1987.map((p, index) => (
       <li key = {index}> {p.name}, {p.start}</li>
      ))}

      <h1>Retail Companies</h1>
      <table style={{ width: "30%", textAlign: "center" }}>
    {retailCompanies.map((company, index) => (
      <tr key={index}>
        <td style={{ border: "1px solid black", padding: "8px" }}>{company.name}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{company.start}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{company.end}</td>
      </tr>
    ))}
</table>

      <h1>Sắp xếp Công ty theo ngày kết thúc</h1>
      <ul>
        {sortedCompaniesByEnd.map((company, index) => (
          <li key={index}>{company.name} - End: {company.end}</li>
        ))}
      </ul>

      <h1>Sắp xếp tuổi theo thứ tự giảm dần</h1>
      <p>{sortedAgesDesc.join(", ")}</p>

      <h1>Sum of Ages</h1>
      <p>{sumOfAges}</p>

    </div>
  );
};

export default App;
