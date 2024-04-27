import typia, { tags } from 'typia'

interface IMember {
  id: string
  email: string & tags.Format<'email'>
  age: number &
    tags.Type<'uint32'> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>
}

const exampleMember = {
  id: 'exampleMember',
  email: 'sam@gmail.com',
  age: 30,
}
const exampleNotMember = {
  id: '>3',
  email: 'exampleNotMember.github@',
  age: 'bbb',
}

const matched: boolean = typia.is<IMember>(exampleMember)
const notMatched: boolean = typia.is<IMember>(exampleNotMember)

console.log(
  'typia.is<IMember>(exampleNotMember)',
  typia.is<IMember>(exampleNotMember)
)
console.log("typia.is<boolean>('a string')", typia.is<boolean>('a string'))

export const loadedTypia = `typia.ts loaded and matched is ${matched} (expected: true) & notMatched is ${notMatched} (expected: false)`
