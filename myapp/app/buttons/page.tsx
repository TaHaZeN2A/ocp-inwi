import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-2-[200px]">
    <Button>default</Button>
    <Button variant="primary">primary</Button>
    <Button variant="primaryOutline">Primary outline</Button>
    <Button variant="secoundary">secoundary</Button>
    <Button variant="secoundaryOutline">secoundary outline</Button>
    <Button variant="danger">danger</Button>
    <Button variant="dangerOutline">danger outline</Button>
    <Button variant="super">super</Button>
    <Button variant="superOutline">super outline</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="sidebar">sidebar</Button>
    <Button variant="sidebarOutline">sidebarOutline</Button>
    </div>
  );
};
export default ButtonsPage;