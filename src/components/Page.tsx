import { Container, Typography } from "@mui/material"

const styles = {
  title: {
    color: '#999',
  }
}

type PageProps = {
  title: string
  children: React.ReactNode
}

export const Page: React.FC<PageProps> = props => {
  return (
    <div>
      <Container>
        <Typography component="h1" variant="h5" sx={styles.title}>
          {props.title}
        </Typography>
        {props.children}
      </Container>
    </div>
  )
}
