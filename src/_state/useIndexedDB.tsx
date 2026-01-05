import { useEffect, useState } from "react";
import { addData, deleteData, getData, openDB } from "./indexdDB";

type Props = {
  dbName: string;
  storeName: string;
};

export const useIndexedDB = ({ dbName, storeName }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(await getData(dbName, storeName));
      setIsLoading(false);
    };

    fetchData();
  }, [dbName, storeName]);

  const addItem = async (item: Record<string, any>) => {
    await addData(dbName, storeName, item);
    setData(await getData(dbName, storeName));
  };

  const removeItem = async (id: IDBValidKey) => {
    await deleteData(dbName, storeName, id);
    setData(await getData(dbName, storeName));
  };

  const removeAll = async () => {
    const db = await openDB(dbName, storeName);
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };

  return { data, isLoading, addItem, removeItem, removeAll };
};
