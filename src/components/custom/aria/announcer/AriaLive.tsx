export default function AriaLive({message}: {message: string}) {
  return (
    <div aria-live={'polite'}>
      <p>{message}</p>
    </div>
  )
}
