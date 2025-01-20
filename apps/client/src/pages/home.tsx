import { Health } from '../components/health/health';

export function Home() {
  return (
    <div className={"container mx-auto"}>
      <h1>Welcome to client!</h1>
      <Health />
    </div>
  );
}
