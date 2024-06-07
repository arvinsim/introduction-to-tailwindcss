export function TopNavbar() {
  return (
    <div className={'flex flex-row w-full justify-between'}>
      <div className={'text-2xl font-bold p-4'}>TailwindCSS</div>
      <div>
        <ul className={'flex space-x-4 p-4'}>
          <li>Docs</li>
          <li>Components</li>
          <li>Blog</li>
          <li>Showcase</li>
        </ul>
      </div>
    </div>
  )
}
