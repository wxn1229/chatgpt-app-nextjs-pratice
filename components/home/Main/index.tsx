import ChatInput from "./ChatInput";
import Menu from "./Menu";
import Welcome from "./Welcome";

export default function Main() {
  return (
    <div className="relative flex-1">
      <main className="overflow-y-auto h-full w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Menu />
        <Welcome></Welcome>
        <ChatInput></ChatInput>
      </main>
    </div>
  );
}
