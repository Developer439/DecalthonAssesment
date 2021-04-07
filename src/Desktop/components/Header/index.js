import '../Common';
import '../../styles/Home/main.scss'


function Header() {
  return (
      <div className="header sticky-top">
        <div className="section">
          <header className="App-header">
            <a href='/'>
              <img src="https://cdncontent.decathlon.in/_next/static/images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg"
                alt="logo" />
            </a>
            <div >
              <a href="#" className="mr-5 signin">
                <img className="d-none d-lg-block d-md-none" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy44NzMiIGhlaWdodD0iMjIuNTE3IiB2aWV3Qm94PSIwIDAgMTcuODczIDIyLjUxNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDQ1Mzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAzKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNS41LDEwLjQyN0E0Ljk5MSw0Ljk5MSwwLDAsMSwxMC41Myw1LjIxNmE0Ljk3Miw0Ljk3MiwwLDEsMSw5LjkzMiwwQTQuOTgsNC45OCwwLDAsMSwxNS41LDEwLjQyN1ptMC04LjkyNmEzLjQ4LDMuNDgsMCwwLDAtMy40NzEsMy43MTUsMy40NzMsMy40NzMsMCwxLDAsNi45MywwQTMuNDc1LDMuNDc1LDAsMCwwLDE1LjUsMS41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuNTY4KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNLjczMiw0MS42MjVBLjc1Ljc1LDAsMCwxLC4yLDQxLjQwN2EuNzUuNzUsMCwwLDEtLjIyMS0uNjcyTDEuODA5LDMxLjJhLjc1Ljc1LDAsMCwxLC43NS0uNjEySDE1LjcxNGEuNzUuNzUsMCwwLDEsLjc1LjU5M2wxLjM2Miw2LjM1NmEuNzUuNzUsMCwwLDEtLjU4OS44OTNMLjg3NSw0MS42MjVhLjU5My41OTMsMCwwLDEtLjE0MywwWm0yLjQzNS05LjUzNC0xLjUsNy44MzUsMTQuNTEzLTIuOC0xLjA3My01LjAzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDMgLTE5LjExMikiLz48L2c+PC9nPjwvc3ZnPg=="
                  alt="My Account" /><p className="m-0">Sign in</p>
              </a>
              <a className="cart" href="/cart"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4xNTUiIGhlaWdodD0iMjEuNDk5IiB2aWV3Qm94PSIwIDAgMjQuMTU1IDIxLjQ5OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDQ1Mzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMy40MzEsMTguNWEuODExLjgxMSwwLDAsMS0uNzc1LS41NzZMOS4xODgsNi41NDFBLjgxNC44MTQsMCwwLDEsOS45NjcsNS40OUgyOC43ODVBLjgxMS44MTEsMCwwLDEsMjkuNiw2LjN2OC45MjRhLjgxMS44MTEsMCwwLDEtLjY4Ni44MTFMMTMuNTUzLDE4LjVaTTExLjA2Miw3LjExMywxNCwxNi43NzlsMTMuOTctMi4yNTVWNy4xMTNabTE3LjcyMyw4LjExM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjQ0MSAtMy4yNjMpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMy43ODYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDIzLjc4Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMzI4IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00NS43NTYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDQ1Ljc1Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMzg2IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00LjYxOCw0LjE1YS44MTEuODExLDAsMCwxLS43NzEtLjU1NmwtLjU0LTEuNjIzTDEuMTc4LDMuMDIyQS44MTIuODEyLDAsMSwxLC40NTIsMS41N0wzLjQyMi4wODVBLjgxMS44MTEsMCwwLDEsNC41NTMuNTU2bC44MzYsMi41MzFBLjgxMS44MTEsMCwwLDEsNC42MTgsNC4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMyAwKSIvPjwvZz48L3N2Zz4="
                alt="Cart" />
                <p className="m-0">Cart</p>
                <div className="count">1</div></a>
            </div>
          </header>
        </div>
      </div>
  );
}

export default Header;
