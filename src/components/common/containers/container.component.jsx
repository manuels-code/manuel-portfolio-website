const Container = (props) => {
  return(
    <div className="m-auto max-w-5xl px-4" style={props.style}>{props.children}</div>
  )
}

export default Container;