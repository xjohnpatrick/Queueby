import { usePathname } from "next/navigation";

export const useSidebar = () => {
  const pathname = usePathname();

  //Hide Sidebar on documents page
  const sidebarHiddenPaths = ["/main/profile-page", "/main/documents-page"];

  const isSidebarHidden = () => {
    return sidebarHiddenPaths.some((path) => pathname.startsWith(path));
  };

  // Function to get buttons for the Dashboard
  const getDashboardButtons = () => {
    return [
      { text: "All", onClick: () => console.log("All") },
      { text: "Pending", onClick: () => console.log("Pending") },
      { text: "To Receive", onClick: () => console.log("To Receive") },
      { text: "Completed", onClick: () => console.log("Completed") },
    ];
  };

  // Function to get buttons for the Records page
  const getRecordsButtons = () => {
    return [
      { text: "All Records", onClick: () => console.log("All Records") },
      {
        text: "Pending Records",
        onClick: () => console.log("Pending Records"),
      },
      {
        text: "To Receive Records",
        onClick: () => console.log("To Receive Records"),
      },
      {
        text: "Completed Records",
        onClick: () => console.log("Completed Records"),
      },
    ];
  };

  // Function to get buttons for the Database page
  const getDatabaseButtons = () => {
    return [
      {
        text: "User Information",
        onClick: () => console.log("User Information"),
      },
      {
        text: "User Transaction",
        onClick: () => console.log("User Transaction"),
      },
      { text: "Announcement", onClick: () => console.log("Announcement") },
      {
        text: "Barangay Officials",
        onClick: () => console.log("Barangay Officials"),
      },
    ];
  };

  // Main function to determine which buttons to return
  const getSidebarButtons = () => {
    if (pathname === "/main/dashboard") {
      return getDashboardButtons();
    } else if (pathname === "/main/records-page") {
      return getRecordsButtons();
    } else if (pathname === "/main/database-page") {
      return getDatabaseButtons();
    }
    return [];
  };

  return { isSidebarHidden, getSidebarButtons };
};
