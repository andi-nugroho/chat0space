import { SidebarProvider } from '@/frontend/components/ui/sidebar';
import ChatSidebar from '@/frontend/components/ChatSidebar';
import { Outlet } from 'react-router';

export default function ChatLayout() {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
