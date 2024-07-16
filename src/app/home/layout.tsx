import React, { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col bg-background">
        <main className="flex w-full grow pt-20 pb-5">{children}</main>
      </div>
    </>
  );
}