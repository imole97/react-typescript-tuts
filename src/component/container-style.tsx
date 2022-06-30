type ContainerStyleProps = {
    styles: React.CSSProperties
}

const ContainerStyle = (props: ContainerStyleProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}

export default ContainerStyle