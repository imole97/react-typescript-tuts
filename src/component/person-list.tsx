import {Name} from './person.types'
type PersonListProp = {
    names: Name[]
}

export const PersonList = (props: PersonListProp) => {
  return (
    <div>
        {
            props.names.map(name => {
                return <h2 key={name.first}>{name.first} {name.last}</h2>
            })
        }
    </div>
  )
}
