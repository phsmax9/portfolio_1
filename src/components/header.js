import React from "react";
import logo from "../images/logo.jpeg";
import YearList from "./yearlist";

export default function Header() {
  const list = ["all", "2019", "2018", "2017", "2016", "2015"];

  return (
    <div className="header">
      <h1>
        <a href="/all">
          <img src={logo} alt="FESTIVAL DE CANNES" />
        </a>
      </h1>
      <p>칸 국제영화제 연도별 국내 출품작</p>
      <ul className="year_list">
        {list.map((year) => (
          <YearList key={year} year={year} />
        ))}
      </ul>
    </div>
  );
}
