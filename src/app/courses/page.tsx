import { redirect } from 'next/navigation';

export default function CoursesRoot() {
  // default route -> all
  redirect('/courses/all');
}
