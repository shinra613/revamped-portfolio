

const render = (types) => {
    
    
    types.map((item) => {
        console.log(item.name);
        return (
            
          <div className="project-content">
            <h1>{item.name}</h1>
            <img
              className="pro-img"
                    src={item.img}
                    alt="img"
              style={{ width: "100%" }}
            />
            <p>{item.def}</p>

            <table>
              <tr>
                <td>
                  <a href={item.url} target="_blank">
                    <button className="btn-one">See Code</button>
                  </a>{" "}
                </td>
                <td>
                  {" "}
                  <a href={item.demo} target="_blank">
                    <button className="btn-two">Test App</button>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        );
    })
    
}

export default render;