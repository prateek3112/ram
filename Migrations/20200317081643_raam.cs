using Microsoft.EntityFrameworkCore.Migrations;

namespace UdemyWeb.Migrations
{
    public partial class raam : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "CourseId", "CategoryId", "CourseDescription", "CourseName", "CourseOfTheWeek", "ImageThumbnailUrl", "ImageUrl", "Price" },
                values: new object[] { 4, 1, " In this course I'll be teaching you my absolute favourite software from the very beginning, right through to creating fully-fledged, dynamic & interactive web experiences.", "Business", false, "https://gillcleerenpluralsight.blob.core.windows.net/files/applepiesmall.jpg", "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg", 18.95m });

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "CourseId", "CategoryId", "CourseDescription", "CourseName", "CourseOfTheWeek", "ImageThumbnailUrl", "ImageUrl", "Price" },
                values: new object[] { 5, 1, " In this course I'll be teaching you my absolute favourite language Node Js) from the very beginning, right through to creating fully-fledged, dynamic & interactive web experiences.", "Backend with Node", false, "https://gillcleerenpluralsight.blob.core.windows.net/files/applepiesmall.jpg", "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg", 18.95m });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "CourseId",
                keyValue: 5);
        }
    }
}
