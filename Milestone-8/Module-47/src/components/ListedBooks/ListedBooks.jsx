import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useReadListContext from "../../Contexts/ReadListContext";

import { useLoaderData } from "react-router";
import useWishListContext from "../../Contexts/WishListContext";
import ListedList from "../listedList/listedList";

export default function ListedBooks() {
  const books = useLoaderData();
  const { readListIds, removeIdsFromTheReadList } = useReadListContext();
  const { wishListIds, removeIdsFromTheWishList } = useWishListContext();

  return (
    <div>
      <div className="mb-8 flex gap-10 items-center">
        <h1 className="font-bold text-3xl pl-4">My Book Tabs</h1>
      </div>
      <Tabs>
        <TabList className={"pl-4 react-tabs__tab-list"}>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>
        <TabPanel>
          <ListedList
            books={books}
            listIds={readListIds}
            removeFromList={removeIdsFromTheReadList}
          />
        </TabPanel>

        <TabPanel>
          <ListedList
            books={books}
            listIds={wishListIds}
            removeFromList={removeIdsFromTheWishList}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}
