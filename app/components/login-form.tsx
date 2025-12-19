import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { ToolCaseIcon } from "lucide-react"
import { usePuterStore } from "~/lib/puter"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {isLoading, auth} = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const navigate = useNavigate();
  useEffect(() => {
    if(auth.isAuthenticated) navigate('/');
  },[auth.isAuthenticated])
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to <b className="text-purple-600">Content IQ</b></CardTitle>
          <CardDescription>
            Login below to continue your journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="bg-purple-600">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form> */}
          <div>
              {
                isLoading ? (
                  <Button className="p-4 bg-purple-600 animate-pulse">Signing you in...</Button>
                ):(
                  <>
                  {
                    auth.isAuthenticated ? (
                      <Button onClick={auth.signOut} className="bg-purple-600 p-4">Log Out</Button>
                    ): (
                       <Button onClick={auth.signIn} className="bg-purple-600 p-4">Log In</Button>
                    )
                  }
                  </>
                )
              }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
