import { Button, Card } from 'src/components/ui'
import { Field } from 'src/components/ui/field'
import { Link } from 'src/navigation'
import { Stack } from 'styled-system/jsx'

export const RoutineCard = () => {
  return (
    <Link href="">
      <Card.Root css={{ maxW: 'full' }}>
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>Add new members to your organisation.</Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Field.Input placeholder="Name" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Field.Input type="email" placeholder="Email" />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer gap="3">
          <Button variant="outline">Cancel</Button>
          <Button>Invite</Button>
        </Card.Footer>
      </Card.Root>
    </Link>
  )
}
