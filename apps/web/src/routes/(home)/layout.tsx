import Header from '@/components/header'
import { Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(home)/layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>  <div>
    <Header/>
          <Outlet />
        </div></div>
}
