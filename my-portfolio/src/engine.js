

const Render = (props) => {
  return (<div>{props.types.map((item) => (<div keys={item} className="project-content">
    <h1>{item.name}</h1>
    <img
      className="pro-img"
      src={item.img}
      alt="img"
      style={{ width: "100%" }}
    />
    <p>{item.def}</p>

    <table>
      <tbody>
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
      </tbody>
        
    </table>
  </div>))}</div>);

  
        
  }
    


export default Render;