"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, FC } from "react";

const UserContent: FC = () => {
  const searchParams = useSearchParams(); // 获取 URL 参数
  const id = searchParams.get("id"); // 提取 id 参数

  return (
    <div>
      <h1>Users Page</h1>
      {id ? (
        <p>User ID from URL: {id}</p>
      ) : (
        <p>Please provide an ID in the URL (e.g., ?id=123).</p>
      )}
    </div>
  );
};

const UsersPage: FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserContent />
    </Suspense>
  );
};

export default UsersPage;
