import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...docOptions()}
    sidebar={{
    tabs: [
      {
        title: 'Buckal',
        description: 'Migrate Cargo projects to Buck2',
        url: '/docs',
      },
      {
        title: 'Qlean',
        description: 'Execute Rust tests in isolated VMs',
        url: '/docs/qlean',
      },
    ],
  }}
    >
      {children}
    </DocsLayout>
  );
}
