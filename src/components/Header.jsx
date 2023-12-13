

export default function Header ({setCurrentPage}) {
    return (
    
        <header >
          
          <h1>Matt Stark's Portfolio</h1>
          <p>Take a look around</p>
          <nav>
            <a onClick={()=>setCurrentPage("About")} href="#">About </a>
            <a onClick={()=>setCurrentPage("Contact")} href="#">Contact </a>
            <a onClick={()=>setCurrentPage("Projects")} href="#">Projects </a>
          </nav>
        </header>
        
         
    )
}